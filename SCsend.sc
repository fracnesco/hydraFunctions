a = NetAddr.new("localhost", 99111)

(Routine {
	loop {
		var num1 = 2.rand;
		// var num2 = 10.rand;
		a.sendMsg("/test", num1);
		0.5.wait;
	}
}.play)


(OSCdef(\tester,
	{|msg| msg.postln;},
	'/test', recvPort: 99321)
)


10.rand