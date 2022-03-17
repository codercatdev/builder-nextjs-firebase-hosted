import { builder, Builder } from '@builder.io/react'
builder.init('c063d74743bf4824aed8edc952a968ab')

export async function resolveBuilderContent(
  modelName: string,
  targetingAttributes: any,
  cachebust?: boolean
) {
  const content = await builder
    .get(modelName, {
      userAttributes: targetingAttributes,
      ...(cachebust
        ? {
            cachebust: true,
            noCache: true,
          }
        : {
            staleCacheSeconds: 140,
          }),
    })
    .toPromise()

  return content || null
}
