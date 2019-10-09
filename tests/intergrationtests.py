import unittest
from unittest.mock import MagicMock
from core import db_operations as db
from datetime import datetime

class IntergrationTests(unittest.TestCase):
    
    def test_insert_and_return_id_is_called_when_adding_new_person(self):
        db.db_insert_and_return_id = MagicMock()

        db.insert_person("Test", "Person")

        db.db_insert_and_return_id.assert_called()

    def test_db_insert_or_update_record_is_called_when_updating_person(self):
        db.db_insert_or_update_record = MagicMock()

        db.update_person(1, "Test", "Person")

        db.db_insert_or_update_record.assert_called()

    def test_db_return_rows_is_called_when_getting_person_by_id(self):
        db.db_return_rows = MagicMock()

        db.get_person_by_id(1)

        db.db_return_rows.assert_called()

    def test_db_insert_and_return_id_is_called_when_adding_new_drink(self):
        db.db_insert_and_return_id = MagicMock()

        db.insert_drink("Test Drink", "test instructions")

        db.db_insert_and_return_id.assert_called()

    def test_db_insert_or_update_record_is_called_when_updating_drink(self):
        db.db_insert_or_update_record = MagicMock()

        db.update_drink(1, "Test Drink", "test instructions")

        db.db_insert_or_update_record.assert_called()

    def test_db_return_rows_is_called_when_getting_drink_by_id(self):
        db.db_return_rows = MagicMock()

        db.get_drink_by_id(1)

        db.db_return_rows.assert_called()

    def test_db_insert_and_return_id_is_called_when_adding_new_drink_pref(self):
        db.db_insert_and_return_id = MagicMock()

        db.insert_person_drinks_pref(1, 1)

        db.db_insert_and_return_id.assert_called()

    def test_db_insert_or_update_record_is_called_when_updating_drink_pref(self):
        db.db_insert_or_update_record = MagicMock()

        db.update_pref(1, 1)

        db.db_insert_or_update_record.assert_called()

    def test_db_insert_and_return_id_is_called_when_adding_new_round(self):
        db.db_insert_and_return_id = MagicMock()

        db.insert_round(1)

        db.db_insert_and_return_id.assert_called()
    
    def test_db_insert_or_update_record_is_called_when_updating_round(self):
        db.db_insert_or_update_record = MagicMock()

        db.update_round(1, True, datetime.utcnow(), 1)

        db.db_insert_or_update_record.assert_called()

    def test_db_return_rows_is_called_when_getting_round_by_id(self):
        db.db_return_rows = MagicMock()

        db.get_round_by_id(1)

        db.db_return_rows.assert_called()

if __name__ == "__main__":
    unittest.main()
