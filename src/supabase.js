import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://kwihxxoyuofzervmisez.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aWh4eG95dW9memVydm1pc2V6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDA5OTYzOSwiZXhwIjoyMDA5Njc1NjM5fQ.eLK-dx960ugNXyOajxSRxYGi_nqBLeVCdhxsTbdeb50"
  
);

export default supabase;