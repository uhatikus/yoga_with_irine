from PIL import Image
import os

# Define input and output folder paths
input_folder = "public/assets/images/gallery"  # Change this to your folder
output_folder = "public/assets/images/gallery/compressed"  # Change this to the destination folder

# Ensure output folder exists
os.makedirs(output_folder, exist_ok=True)

def remove_exif_orientation(img):
    """Remove EXIF orientation to avoid auto-rotation"""
    try:
        # Check and reset EXIF orientation if present
        exif = img._getexif()
        if exif is not None:
            orientation_tag = 274  # The EXIF orientation tag
            if orientation_tag in exif:
                orientation = exif[orientation_tag]
                if orientation == 3:
                    img = img.rotate(180, expand=True)
                elif orientation == 6:
                    img = img.rotate(270, expand=True)
                elif orientation == 8:
                    img = img.rotate(90, expand=True)
    except (AttributeError, KeyError, IndexError):
        # No EXIF orientation info available
        pass
    return img

# Process all images in the folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(("png", "jpg", "jpeg", "bmp", "gif", "tiff")):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)

        # Remove EXIF orientation and prevent rotation
        img = remove_exif_orientation(img)
        
        # Resize while maintaining the aspect ratio
        width, height = img.size
        new_height = 600
        new_width = int((new_height / height) * width)

        img_resized = img.resize((new_width, new_height), Image.LANCZOS)
        
        # Save resized image
        img_resized.save(os.path.join(output_folder, filename))

        print(f"Resized {filename} to {new_width}x600 pixels")

print("Batch resizing complete!")