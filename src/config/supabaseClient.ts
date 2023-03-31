const dotenv = require("dotenv");

const { createClient } = require("@supabase/supabase-js");

dotenv.config({ path: ".env" });

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

// Create the connection to supabase using the Project URL and anon public key
const supabase = createClient(supabaseUrl, supabaseAnonKey); 

export default supabase;
