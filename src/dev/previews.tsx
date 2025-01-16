import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/NotFoundPage">
        <NotFoundPage />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
