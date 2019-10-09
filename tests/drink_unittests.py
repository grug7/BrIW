import unittest
from core.classes import Drink

class DrinkUnitTests(unittest.TestCase):

    def test_constructor_with_instructions(self):
        drink_id = 1
        name = "Frapalapachino"
        instructions = "Ask the starbucks barista very nicley"

        test_drink = Drink(drink_id, name, instructions)

        self.assertEqual(drink_id, test_drink.id)
        self.assertEqual(name, test_drink.name)
        self.assertEqual(instructions, test_drink.instructions)

    def test_constructor_without_instructions(self):
        drink_id = 1 
        name = "Frapalapachino"

        test_drink = Drink(drink_id, name)
        
        self.assertEqual(drink_id, test_drink.id)
        self.assertEqual(name, test_drink.name)


if __name__ == "__main__":
    unittest.main()
