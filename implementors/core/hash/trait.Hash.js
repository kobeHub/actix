(function() {var implementors = {};
implementors["actix"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"actix/struct.SpawnHandle.html\" title=\"struct actix::SpawnHandle\">SpawnHandle</a>",synthetic:false,types:["actix::actor::SpawnHandle"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressSender.html\" title=\"struct actix::dev::channel::AddressSender\">AddressSender</a>&lt;A&gt;",synthetic:false,types:["actix::address::channel::AddressSender"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"actix/struct.Addr.html\" title=\"struct actix::Addr\">Addr</a>&lt;A&gt;",synthetic:false,types:["actix::address::Addr"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"actix/struct.Recipient.html\" title=\"struct actix::Recipient\">Recipient</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["actix::address::Recipient"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()