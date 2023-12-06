function manufacture(gifts, materials) {
  if (!gifts?.length || !materials) {
    return [];
  }

  const uniqueMaterials = new Set(materials);

  const doableGifts = gifts.filter((gift) =>
    [...new Set(gift)].every((char) => uniqueMaterials.has(char))
  );

  return doableGifts;
}
