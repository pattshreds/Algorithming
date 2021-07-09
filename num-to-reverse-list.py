# 8 kyu

# My first Codewars Challenge using Python!

# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


def digitize(n):
  numToList = list(map(int, str(n)))
  numToList.reverse()
  return numToList

print(
  digitize(1234)
)