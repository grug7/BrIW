import unittest
from core.classes import Person, Drink

class PersonUnitTests(unittest.TestCase):

    def test_contructor_with_drink(self):
        fav_drink_id = 1
        fav_drink_name = "Fight Milk"

        p_id = 1
        first_name = "Test"
        last_name = "Person"
        full_name = f"{first_name} {last_name}"
        fav_drink = Drink(fav_drink_id, fav_drink_name)

        test_person = Person(p_id, first_name, last_name, fav_drink)

        self.assertEqual(p_id, test_person.id)
        self.assertEqual(first_name, test_person.first_name)
        self.assertEqual(last_name, test_person.last_name)
        self.assertEqual(full_name, test_person.full_name)
        self.assertEqual(fav_drink_id, test_person.fav_drink.id)
        self.assertEqual(fav_drink_name, test_person.fav_drink.name)
        self.assertEqual(None, test_person.fav_drink.instructions)

    def test_contructor_without_drink(self):
        p_id = 1
        first_name = "Test"
        last_name = "Person"
        full_name = f"{first_name} {last_name}"

        test_person = Person(p_id, first_name, last_name)
 
        self.assertEqual(p_id, test_person.id)
        self.assertEqual(first_name, test_person.first_name)
        self.assertEqual(last_name, test_person.last_name)
        self.assertEqual(full_name, test_person.full_name)


if __name__ == "__main__":
    unittest.main()
