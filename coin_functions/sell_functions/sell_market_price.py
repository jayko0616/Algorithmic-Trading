import pyupbit

access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"     ##access, secret code >> access 권한 획득
 
upbit = pyupbit.Upbit(access_key, secret_key)

balance = upbit.get_balance("KRW-BTC")
print(balance)

count = input("매도하고자 하는 종목의 코인 수를 입력하시오: ")

print(upbit.sell_market_order("KRW-BTC", count))  #BTC를 count개만큼 시장가매도

#개선해야할 점: 1. 종목을 비트코인을 팔수도 리플을 팔 수도 있는데 종목을 다르게 설정할 수 있도록
#count의 개수는 코인의 개수와 동일한데 코인의 특성상 소수점으로 나타날 수 있어서 최소금액을 어떻게 환산해서 보여줄지 고민해보기