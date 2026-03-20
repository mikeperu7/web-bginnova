from PIL import Image
import os

input_path = "/Volumes/SAMSUNG 970 EVO PLUS/Repositorio/BG Innova/web-bginnova/public/bg_innova_logo_v2.png"
output_path = "/Volumes/SAMSUNG 970 EVO PLUS/Repositorio/BG Innova/web-bginnova/public/bg_innova_logo_v3.png"

def remove_background(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very dark (black or near-black), make it transparent
        # R, G, B, A
        sum_rgb = item[0] + item[1] + item[2]
        if sum_rgb < 45: # Threshold for dark pixels
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Success: Transparent logo saved to {output_path}")

if __name__ == "__main__":
    if os.path.exists(input_path):
        remove_background(input_path, output_path)
    else:
        print(f"Error: {input_path} not found")
