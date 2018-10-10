# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

First your browser and operating system check to see if they already have the IP address associated with www.techtonicgroup.com in cache.
If they do not, the operating system queries the resolving name server.
If the resolving name server does not have the address in cache, the resolving name server will query the root name server,
which will direct it to the correct Top Level Domain server. The Top Level Domain server will refer the Resolving Name server
to the proper Authoritative Name Server which will give it the proper IP address.
The resolving name server will then take that info back to the Operating System which will then pass it on to the Browser.

Now the browser sends a request to the server at that IP address. If the request is approved, the server will send a copy of
the website in packets to the browser which will then reassemble the website to display to you.

## From start to finish how does that data reach you to be rendered in the browser?

Data is transferred from the server, where it is kept, to the client, your device where you want to access it, via TCP/IP (Transmission Control Protocol/Internet Protocol.)
When the request is received and approved, the server uses TCP to break the data up into chunks called packets which each have some of the data and the address where they are going.
It then uses IP to check a routing table which shows the destination address, the next hop addresses to send a packet to, and a set of possible routes.
The server decides which route is the best choice at the time (this could change from packet to packet) and sends it on to the next hop. Lather rinse repeat for all the packets.

Each "Next Hop" that receives one or more packets will do the same thing until eventually all the packets reach their destination, potentially
having bounced all over the world on their way to you.

Your computer will use TCP to recognize when all the packets have arrived and also to reassemble them into the whole document.

## What code is rendered in the browser?

Your browser actually renders HTML, XML, and images. But the render engine also parses the CSS file to allow it to apply styles to the rendered page.
Additionally, your browser will likely have a JavaScript engine which will interpret the JS code, either adding to the HTML, XML, and images rendered (e.g. React)
or adding functionality depending on what the code is.

## What is the server-side code’s main function?

Server side code's main function is to control what data is sent to you.

## What is the client-side code’s main function?

Client side code is all about taking that data and deciding how to structure and present it to you.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Potentially millions of instances could be created. It depends on how many people are accessing a website at any given time.

## How many instances of the server-side code are available at any given time?

It depends on how many servers you have dedicated to a particular site or if you are using a cloud server that can scale up and down, but typically much
fewer than the clients making requests.

I could serve a website off my laptop and then there would only be one.

## What is runtime?

Runtime is now. It is when the code is actually running. It is opened, loaded into memory and starts doing its thing and continues until it finishes or is closed.

## How many instances of the databases connected to the server application are created?

There is one source of truth for each database, but depending on the load, there are strategies that can temporarily seem to create multiple copies but they
always have to come back to the one.

You can't have two instances and have one user buy the last beanie baby from one instance of the database and another user from the other when there is only one beanie baby to buy.
