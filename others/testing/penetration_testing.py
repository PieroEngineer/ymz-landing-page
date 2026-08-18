import requests

# 1. The credentials the hacker stole from your HTML
SUPABASE_URL = "https://giyjehsmcnrfkzaxzpmz.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWplaHNtY25yZmt6YXh6cG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NjU3MzIsImV4cCI6MjA5MzM0MTczMn0.kKLcrRlaIq95a7XGmguSln-DaEkPxKLf9n6WEABD-MI"

# 2. The target: Your table of private leads
# The API path for Supabase/PostgREST is usually /rest/v1/TABLE_NAME
target_url = f"{SUPABASE_URL}/rest/v1/contact_leads"

headers = {
    "apikey": SUPABASE_ANON_KEY,
    "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
    "Content-Type": "application/json"
}

print("🕵️ Attempting to steal Yummizi lead data...")

try:
    # The hacker tries to SELECT all data
    response = requests.get(target_url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        if len(data) == 0:
            print("✅ SUCCESS: The hacker got an empty list []. RLS is working!")
        else:
            print(f"❌ SECURITY BREACH: The hacker stole {len(data)} rows!")
            print(data)
    else:
        # Sometimes Supabase returns a 401 or 403 depending on configuration
        print(f"✅ SUCCESS: Access Denied. Server returned status: {response.status_code}")
        print(f"Message: {response.text}")

except Exception as e:
    print(f"An error occurred: {e}")