function transformTree(tree) {
  const buildTree = (index) => {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    const node = {
      value: tree[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };

    return node;
  };

  const result = buildTree(0);
  return result;
}
