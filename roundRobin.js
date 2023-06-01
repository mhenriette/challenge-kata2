const roundRobin = (jobs, slice, index) => {
  let clockCycles = 0;
  let jobIndex = 0;
  const jobQueue = [...jobs];

  while (jobQueue[index] > 0) {
    const currentJob = jobQueue[jobIndex];
    const timeSlice = Math.min(slice, currentJob);

    jobQueue[jobIndex] -= timeSlice;
    clockCycles += timeSlice;

    jobIndex = (jobIndex + 1) % jobQueue.length;
  }

  return clockCycles;
};
