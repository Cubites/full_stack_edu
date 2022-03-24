words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
result = [word for word in words if len(word) > 6]

# 'filter' vs 'list comprehension'

arr = list(range(1, 31))

def is_even(num):
    print("isEven:", num)
    if num % 2 == 0:
        return True # even
    return False # odd


print("\n=== list comprehension ==============")
for x in [i for i in arr if is_even(i)]:
    print("x:", x)
    if x > 10:
        break


print("\n=== filter =========================")
for x in filter(is_even, arr):
    print("x:", x)
    if x > 10:
        break


print("\n=== list comprehension (before for loop) ==============")
evens = [i for i in arr if is_even(i)]
print("위 코드 계산 끝나고 아래 for문 실행")
for x in evens:
    print("x:", x)
    if x > 10:
        break


print("\n=== filter (before for loop) =========================")
iterator = filter(is_even, arr)
print("위 filter 계산 아직 안함(isEven이 출력이 안됐음)")
for x in iterator:
    print("x:", x)
    if x > 10:
        break

# def even_generator(nums):
#     for num in nums:
#         print("EvenGenerator:", num)
#         if num % 2 == 0:
#             yield num
# 
# print("\n=== generator =========================")
# for x in even_generator(list(range(1, 101))):
#     print("x:", x)
#     if x > 10:
#         break