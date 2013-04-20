var buffer = new Buffer(100);

for(var i = 0; i < buffer.length; i++)
{
    buffer[i] = i;
}

buffer = buffer.slice(40, 60);

console.log(buffer);