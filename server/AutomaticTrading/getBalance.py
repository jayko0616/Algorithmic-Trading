#잔고 조회
import sys
import pyupbit


def getBalance(access, secret):
<<<<<<< HEAD
    print("poiuytrdfg")
    upbit = pyupbit.Upbit(access,  secret)
    balance = upbit.get_balance("KRW")
    print(balance)
    return balance
=======
    print("dsf")
    upbit = pyupbit.Upbit(access,  secret)
    print("잔고: {}".format(upbit.get_balances()))
    return 3
>>>>>>> ff9cdeb4a2c76f34671007d648e1df8387c81693

if __name__ == '__main__':
    getBalance(sys.argv[1], sys.argv[2])