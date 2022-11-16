#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
    upbit = pyupbit.Upbit(access,  secret)
    balance = upbit.get_balance("KRW")
    return balance

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])