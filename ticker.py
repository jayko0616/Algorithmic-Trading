import pyupbit
access = "sCdRT8xO9jw1bYo2UxpB0rcIQYGQRc5ccXs2Ix6V"
secret = "OPyX7tWuowsOk6kmxdOT9aT8xy8QazBdYsux3wEJ" # secret key 직접 입력

upbit = pyupbit.Upbit(access, secret)
print(upbit.get_balances())

