import pyupbit
import pandas as pd
 
access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"
 
upbit = pyupbit.Upbit(access_key, secret_key)
df = pd.DataFrame(upbit.get_balances())         #print(df)하면 다양한 정보가 출력되는데 (평단가, 가격변동, KRW로 샀는지 등)


print(df[['currency','balance']])               #그 중에서 currency와 balance, 즉 종목과 그 종목에 들어가 있는 돈만 출력하겠습니다.