import pyupbit

access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"     ##access, secret code >> access 권한 획득
 
upbit = pyupbit.Upbit(access_key, secret_key)

balance = upbit.get_balance("KRW")
print(balance)

count = input("개수를 입력하시오: ")

ret = upbit.buy_limit_order("KRW-XRP", 100, count)         ##지정가 매수 종목//금액//개수
print(ret)

# [order cnacle]                                           ##주문취소 기능인데 어떻게 구현해야할지 회의 때 고민하는걸로
# uuid = ret['uuid'] # 주문번호 얻기
# print(uuid)
# ret = upbit.cancel_order(uuid) # 주문 취소
# print(ret)