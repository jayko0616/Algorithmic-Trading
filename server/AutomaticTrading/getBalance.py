#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
    print("poiuytrdfg")
    upbit = pyupbit.Upbit(access,  secret)
    print("원: {}".format(upbit.get_balances(ticker="KRW")))
    return 3

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])