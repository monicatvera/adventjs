function findBalancedSegment(message) {
  let max_length = 0;
  let segment_indices = [];
  for (let start = 0; start < message.length; start++) {
    let zeros = 0;
    let ones = 0;
    for (let end = start; end < message.length; end++) {
      if (message[end] === 0) {
        zeros++;
      } else {
        ones++;
      }
      if (zeros === ones && end - start + 1 > max_length) {
        max_length = end - start + 1;
        segment_indices = [start, end];
      }
    }
  }

  return segment_indices;
}
