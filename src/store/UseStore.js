import create from 'zustand';

const useStore = create(set => ({
  background: '#f8f9fa',
  boxColor: '#ffffff',
  fontColor: '#000000',
  gameStatus: 'ongoing',
  setColors: (background, boxColor, fontColor) => set({ background, boxColor, fontColor }),
  setGameStatus: status => set({ gameStatus: status }),
  resetGame: () => set({ gameStatus: 'ongoing' }),
}));

export default useStore;
