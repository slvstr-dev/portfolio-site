import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const options = { headers: { "Cache-Control": "public, max-age=31536000" } };

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);
