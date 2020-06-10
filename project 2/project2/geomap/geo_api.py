from geopy.geocoders import Nominatim
from api_keys import api_key
import pandas as pd 

geolocator = Nominatim(user_agent=api_key)
location = geolocator.geocode("175 5th Avenue NYC")
print((location.latitude, location.longitude))

df = pd.read_csv("PIDX_Terminal_Codes.csv")

print(df.isnull().sum(axis=1))


# with open('PIDX_Terminal_Codes.csv','r', encoding="utf-8-sig") as csvfile:
    
#     csvreader = csv.reader(csvfile)
#     csv_header = next(csvfile)
    
#     for address in csvreader:

#         city = row[4]
#         country = row[7]

#             geolocator = Nominatim(user_agent=api_key)
#             location = geolocator.geocode(f"{city}{country}")
#                 print((location.latitude, location.longitude))