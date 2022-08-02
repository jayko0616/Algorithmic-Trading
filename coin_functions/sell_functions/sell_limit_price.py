import pyupbit

access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"     ##access, secret code >> access 권한 획득
 
upbit = pyupbit.Upbit(access_key, secret_key)


balance = upbit.get_balance("KRW-BTC")
print(balance)

print(upbit.sell_limit_order("KRW-BTC", 600, 20)) # 지정가 매도 (비트코인, 600원, 20개)

#지정가 매도시 비트코인 값이 소수점으로 가는 코인은 가격 지정을 어떻게 해야할까?
#취소 기능이 제일 필요한게 시장가 매수/매도이므로 함수를 만들어두고 어떻게 추가할지 고민

