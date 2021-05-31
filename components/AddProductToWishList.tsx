interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onRequestClose,
  onAddToWishList,
}: AddProductToWishListProps) {
  return <span>Deseja adicionar aos favoritos?
    <button 
  onClick={onAddToWishList}>Sim</button><button 
  onClick={onAddToWishList}>Não</button></span>;
}
