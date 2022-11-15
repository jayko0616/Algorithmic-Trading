#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
    print("dsf")
    upbit = pyupbit.Upbit(access,  secret)
    print("잔고: {}".format(upbit.get_balances()))
    return 3

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])