import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xqjjrfgduujixcrosyjt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxampyZmdkdXVqaXhjcm9zeWp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODA4NDQyMiwiZXhwIjoyMDYzNjYwNDIyfQ.1E3MGFvS90VT1bcohFwfYto-Mgf-PUF4-47zenfgWzM';

export const supabase = createClient(supabaseUrl, supabaseKey);
