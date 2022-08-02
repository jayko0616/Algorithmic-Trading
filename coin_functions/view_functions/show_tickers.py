import requests
import time
import pandas as pd				# 판다스를 pd라는 이름으로 가져와요


url = "https://api.upbit.com/v1/market/all"

coinname = requests.get(url)                        # api 데이터 호출
coinname = coinname.json()                          # coinname으로 가져온 json 데이터를 list로 저장

coinname_df = pd.DataFrame(coinname)  		        # coinname 데이터를 데이터프레임으로 만듦니다
coinname_df.columns = ["TICKER" ,"KOR", "ENG"] 

ticker = input("통화를 입력해주세요(KRW/USDT/BTC): ") #통화 종류 KRW/USDT/BTC

time.sleep(0.1)

print(coinname_df[coinname_df['TICKER'].str.contains(ticker, na=False)])    

##활용으로 예를 들어 "한글코인"이라는 종목을 찾고싶으면 loc써서 찾는 것도 있으니 추후에 추가하면 괜찮을 것 같음