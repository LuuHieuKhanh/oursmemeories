import { supabase } from "./supabase";
import { FRIENDS_DATA } from "./data";

export type FriendData = {
  id: string;
  name: string;
  fullName: string;
  faculty: string;
  course: string;
  imageSrc: string;
  accentColor?: string;
  hallOfFame: { nickname: string; giver: string }[];
  letter: { date: string; content: string } | null;
  graduation: { date: string; caption: string } | null;
  graduationPhotoUrl: string;
};

export type GalleryPhotoData = {
  id: string;
  url: string;
  category: string;
  title: string;
  description: string;
  uploader: string;
  date: string;
  aspectRatio: string;
  comments: { id: string; author: string; text: string; date: string }[];
};

export async function getFriendsData(): Promise<FriendData[]> {
  const { data: persons, error: personsError } = await supabase.from('persons').select('*').order('created_at', { ascending: true });
  if (personsError) console.error("Error fetching persons:", personsError);
  
  const { data: nicknames, error: nicknamesError } = await supabase.from('nicknames').select('*');
  if (nicknamesError) console.error("Error fetching nicknames:", nicknamesError);
  
  const { data: letters, error: lettersError } = await supabase.from('letters').select('*');
  if (lettersError) console.error("Error fetching letters:", lettersError);
  
  if (!persons) return [];
  
  return persons.map(p => {
    const personNicknames = nicknames?.filter(n => n.receiver_id === p.id) || [];
    const letter = letters?.find(l => l.author_name === p.short_name);
    const staticFriend = FRIENDS_DATA.find(f => {
      const dbShort = p.short_name.toLowerCase();
      if (f.name.toLowerCase() === dbShort) return true;
      if (f.id.toLowerCase() === dbShort) return true;
      if (f.fullName === p.full_name) return true;
      // Handle "Nuyên" vs "Nguyên" spelling mismatch between mock data and DB
      if (f.id === "nuyen" && (dbShort === "nguyên" || dbShort === "nguyen")) return true;
      return false;
    });
    return {
      id: p.id,
      name: p.short_name,
      fullName: p.full_name || p.short_name,
      faculty: p.faculty || "Unknown Faculty",
      course: p.course || "Class of 2026",
      imageSrc: p.avatar_url || "",
      accentColor: staticFriend?.accentColor,
      hallOfFame: personNicknames.map(n => ({
        nickname: n.nickname,
        giver: n.giver_name
      })),
      letter: letter ? {
        date: new Date(letter.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        content: letter.content
      } : null,
      graduation: p.graduation_date ? {
        date: p.graduation_date,
        caption: p.graduation_caption || ""
      } : null,
      graduationPhotoUrl: p.graduation_photo_url || ""
    };
  });
}

export async function getGalleryPhotos(): Promise<GalleryPhotoData[]> {
  const { data: photos, error: photosError } = await supabase.from('gallery_images').select('*').order('created_at', { ascending: false });
  if (photosError) console.error("Error fetching gallery images:", photosError);
  
  const { data: comments, error: commentsError } = await supabase.from('comments').select('*').order('created_at', { ascending: true });
  if (commentsError) console.error("Error fetching comments:", commentsError);
  
  if (!photos) return [];
  
  return photos.map(photo => {
    const photoComments = comments?.filter(c => c.image_id === photo.id) || [];
    return {
      id: photo.id,
      url: photo.image_url,
      category: photo.category,
      title: photo.title,
      description: photo.description || "",
      uploader: photo.uploader_name,
      date: new Date(photo.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      aspectRatio: photo.aspect_ratio || "aspect-square",
      comments: photoComments.map(c => ({
        id: c.id,
        author: c.author_name,
        text: c.content,
        date: new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      }))
    };
  });
}
