#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
    print(access)
    print(secret)
    upbit = pyupbit.Upbit(str(access),  str(secret))
    print("원: {}".format(upbit.get_balance(ticker="KRW")))
    return 3

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])