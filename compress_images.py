import os
from PIL import Image
import glob

# Paths to sweep
folders = [
    r'c:\Users\whydo\D9043DB2025\code\explore\web_project\bimbel_nia\src\assets\gallery\**\*.*',
    r'c:\Users\whydo\D9043DB2025\code\explore\web_project\bimbel_nia\src\assets\article_image\**\*.*',
    r'c:\Users\whydo\D9043DB2025\code\explore\web_project\bimbel_nia\src\assets\student\**\*.*'
]

extensions = ('.png', '.jpg', '.jpeg')

for folder_glob in folders:
    files = glob.glob(folder_glob, recursive=True)
    for file_path in files:
        if file_path.lower().endswith(extensions) and not file_path.lower().endswith('.webp'):
            print(f"Compressing {file_path}")
            try:
                with Image.open(file_path) as img:
                    webp_path = os.path.splitext(file_path)[0] + '.webp'
                    # Convert to RGB if necessary before saving to WebP (transparency handled automatically by WebP but mode needs to be compatible)
                    # Actually, PIL saves RGBA to WebP fine if the library is built with WebP support.
                    img.save(webp_path, 'webp', quality=80, method=6)
                print(f"Saved {webp_path}")
                os.remove(file_path) # Delete old file
            except Exception as e:
                print(f"Error converting {file_path}: {e}")

print("Compression complete!")
