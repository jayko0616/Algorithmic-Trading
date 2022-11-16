#매수한 전 금액 조회
import sys
import pyupbit



def getAllAmount(access, secret):
    upbit = pyupbit.Upbit(access,  secret)
    amount = upbit.get_amount('ALL')
    return amount

if __name__ == '__main__':
    getAmount(sys.argv[1], sys.argv[2])