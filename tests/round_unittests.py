import unittest
from core.classes import Round
from datetime import datetime

class RoundUnitTests(unittest.TestCase):
    
    def test_constructor(self):
        r_id = 2
        active = True
        start_time_UTC = datetime.utcnow()
        initiator = 5
        
        test_round = Round(r_id, active, start_time_UTC, initiator)

        self.assertEqual(r_id, test_round.id)
        self.assertTrue(test_round.isActive())
        self.assertEqual(start_time_UTC, test_round.start_time_UTC)
        self.assertEqual(initiator, test_round.initiator)


    def test_constructor_converts_active_int_to_bool(self):
        r_id = 2
        start_time_UTC = datetime.utcnow()
        initiator = 5
        
        #1 should evaluate to True
        test_round_true = Round(r_id, 1, start_time_UTC, initiator)
        #2 should evaluate to False
        test_round_false = Round(r_id, 2, start_time_UTC, initiator)

        self.assertTrue(test_round_true.isActive())
        self.assertFalse(test_round_false.isActive())
    

if __name__ == "__main__":
    unittest.main()
