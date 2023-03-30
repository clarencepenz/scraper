const dotenv = require("dotenv");

const { createClient } = require("@supabase/supabase-js");

dotenv.config({ path: ".env" });

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY


const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
