#!/bin/bash
#file: unittests.sh

pytest -v \
	tests/drink_unittests.py \
	tests/person_unittests.py \
	tests/round_unittests.py
