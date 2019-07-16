implement revert function which accepts string of chars and underscores and for every subset of chars reverts every symbol position.

For example: 

revert('_a__'); -> '_a__'
revert('_a__b'); -> '_a__b'
revert('aaab'); -> 'baaa'
revert('_____'); -> '_____'
revert('ab__b'); -> 'ba__b'
revert('_bcd_'); -> '_dcb_'
revert(''); -> ''
revert('ab__bc'); -> 'ba__cb'