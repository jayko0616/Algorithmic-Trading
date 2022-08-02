import pyupbit

access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"     ##access, secret code >> access 권한 획득
 
upbit = pyupbit.Upbit(access_key, secret_key)

price = upbit.get_avg_buy_price("KRW-BTC")     #본인이 구매한 코인의 평균값을 알 수 있는 함수, 종목별로 입력받을 수 있게 해야겠다.

print(price)