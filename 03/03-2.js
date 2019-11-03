const castVote = (name, [timsVote, sallysVote, bethsVote]) => {
  return [
    name === 'Tim' ? timsVote + 1 : timsVote,
    name === 'Sally' ? sallysVote + 1 : sallysVote,
    name === 'Beth' ? bethsVote + 1 : bethsVote,
  ];
}
