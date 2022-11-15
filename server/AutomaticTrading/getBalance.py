#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
    
    upbit = pyupbit.Upbit(str(access), str(secret))
    print("이제는 되라!" , upbit.get_balance("KRW"))
    return 3

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])