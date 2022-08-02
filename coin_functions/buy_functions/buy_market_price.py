import pyupbit

access_key = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret_key = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ"     ##access, secret code >> access 권한 획득
 
upbit = pyupbit.Upbit(access_key, secret_key)


balance = upbit.get_balance("KRW")
print(balance)

money = input("가격을 입력하세요: ")

print(upbit.buy_market_order("KRW-BTC", money))             #시장가 매수 전략, 구매하고자 하는 종목과 가진 금액을 
                                                            #입력하면 시장가로 해당 금액만큼 매수 가능
                                                            #money == balance로 하면 전량매수 가능


##ret = upbit.buy_limit_order("KRW-XRP", 100, 20)         ##지정가 매수
##print(ret)