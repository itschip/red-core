export function getGameLicense(source: number): string {
  let identifier = null;
  for (let i = 0; i < GetNumPlayerIdentifiers(source.toString()); i++) {
    let ident = GetPlayerIdentifier(source.toString(), i);

    if (ident.includes('license:')) {
      identifier = ident;
    }
  }

  return identifier;
}
