# Process-Control-Block

The process control block or PCB are algorithms used for OS to manage its task,
this simulator create dynamic graphic using a canvas.

## Form

This implementation works under a form, where you add every process

![Form](./.example/form.png)

## Simulation

> Note: All the representation here don't take care about blanks, such as piece of a process
> it means that "blanks" will be ommited

### FIFO

This is an example of a FIFO simulation; this algorithm works as a line
where every process who is "in" will complete its task, then the next process
who follows its "entrace" will continue

![FIFO](./.example/fifo.png)

### SJF

SJF representes shorter first; in this algorithm the shortert avalible process
will follow the next one

![SJF](./.example/sjf.png)

### Priority

Using priority algorithm, task stack will be display all the process by sorting
every process by a new task call "priority" what means that every process will
have a priority

![Priority](./.example/priority.png)

### Round Robin

Still in process...

### To do

- [x] Performe FIFO simulation
- [x] Performe SJF simulation
- [x] Performe Priority simulation
- [ ] Performe Round Robin simulation
- [ ] Scale boxes to fit canvas properly
- [ ] Improve documentation
