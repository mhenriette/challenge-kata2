const roundRobin = (jobs, slice, index) => {
  let cc = 0;
  let jobIndex = 0;
  const jobQueue = [...jobs];

  while (jobQueue[index] > 0) {
    const currentJob = jobQueue[jobIndex];
    const timeSlice = Math.min(slice, currentJob);

    jobQueue[jobIndex] -= timeSlice;
    cc += timeSlice;

    jobIndex = (jobIndex + 1) % jobQueue.length;
  }

  return cc;
};
