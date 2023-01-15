import * as h from './ProductCard.header';

export function ProductCard() {
  const [is3dVisualization, setIs3dVisualization] = h.useState(false);
  return (
    <div
      className={h.style.CardWrapper}
    >
      <div
        className={h.style.ProductVisualizationWrapper}
        style={{
          display: is3dVisualization ? 'flex' : 'none'
        }}
      >
        <img
          src={h.Assets.closeIcon}
          alt="Fechar visualização tridimensional do produto"
          className={h.style.ProductActionIcon}
          onClick={() => setIs3dVisualization(false)}
          style={{
            width: '1rem'
          }}
        />
        <h.Spline
          scene={h.Constants.splineDesigns[0]}
        />
      </div>
      <div
        className={h.style.ProductVisualizationWrapper}
        style={{
          display: is3dVisualization ? 'none' : 'flex'
        }}
      >
        <img
          src={h.Assets.tridimensionalVisualizationIcon}
          alt="Ativar visualização tridimensional do produto"
          className={h.style.ProductActionIcon}
          onClick={() => setIs3dVisualization(true)}
          style={{
            width: '2rem'
          }}
        />
        <img
          src={h.Assets.staticSofa}
          alt="Sofá Estático"
          className={h.style.StaticProductPreview}
        />
      </div>

      <div
        className={h.style.ProductDetails}
      >
        <span
          className={h.style.ProductCode}
        >
          CÓDIGO: 42404
        </span>
        <br />
        <br />
        <h2
          className={h.style.ProductTitle}
        >
          Sofá Margot II - Rosé
        </h2>
        <br />
        <span
          className={h.style.ProductPrice}
        >
          R$ 4.000
        </span>
        <br />
        <br />
        <button
          type="button"
          className={h.style.Button}
        >
          ADICIONAR À CESTA
        </button>
      </div>
    </div>
  );
}