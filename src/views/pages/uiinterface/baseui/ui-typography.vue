<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>{{ $t('Typography') }}</h4>
        </div>
      </div>
      <div class="row">
        <!-- Headings Tags -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('HeadingsTags') }}</h5>
            </div>
            <div class="card-body">
              <h1 class="mb-3">h1. {{ $t('Bootstrapheading') }}</h1>
              <h2 class="mb-3">h2. {{ $t('Bootstrapheading') }}</h2>
              <h3 class="mb-3">h3. {{ $t('Bootstrapheading') }}</h3>
              <h4 class="mb-3">h4. {{ $t('Bootstrapheading') }}</h4>
              <h5 class="mb-3">h5. {{ $t('Bootstrapheading') }}</h5>
              <h6 class="mb-0">h6. {{ $t('Bootstrapheading') }}</h6>
            </div>
          </div>
        </div>
        <!-- /Headings Tags -->

        <!-- Headings Class Names -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('HeadingClassNames') }}</h5>
            </div>
            <div class="card-body">
              <p class="h1 mb-3">h1. {{ $t('Bootstrapheading') }}</p>
              <p class="h2 mb-3">h2. {{ $t('Bootstrapheading') }}</p>
              <p class="h3 mb-3">h3. {{ $t('Bootstrapheading') }}</p>
              <p class="h4 mb-3">h4. {{ $t('Bootstrapheading') }}</p>
              <p class="h5 mb-3">h5. {{ $t('Bootstrapheading') }}</p>
              <p class="h6 mb-0">h6. {{ $t('Bootstrapheading') }}</p>
            </div>
          </div>
        </div>
        <!-- /Headings Class Names -->

        <!-- Display Headings -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('DisplayHeadings') }}</h5>
            </div>
            <div class="card-body">
              <h1 class="mb-0 display-1">{{ $t('Display') }} 1</h1>
              <h1 class="mb-0 display-2">{{ $t('Display') }} 2</h1>
              <h1 class="mb-0 display-3">{{ $t('Display') }} 3</h1>
              <h1 class="mb-0 display-4">{{ $t('Display') }} 4</h1>
              <h1 class="mb-0 display-5">{{ $t('Display') }} 5</h1>
              <h1 class="mb-0 display-6">{{ $t('Display') }} 6</h1>
            </div>
          </div>
        </div>
        <!-- /Display Headings -->

        <!-- Text Element -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('TextElement') }}</h5>
            </div>
            <div class="card-body">
              <p>{{ $t('Youcanusethemarktagto') }} <mark>{{ $t('highlight') }}</mark> {{ $t('text') }}.</p>
              <p><del>{{ $t('del') }}.</del></p>
              <p>
                <s>{{ $t('this') }}.</s>
              </p>
              <p>
                <ins>{{ $t('ins') }}.</ins>
              </p>
              <p><u>{{ $t('u') }}</u></p>
              <p>
                <small>{{ $t('small...') }}.</small>
              </p>
              <p><strong>{{ $t('Thislinerenderedasboldtext') }}.</strong></p>
              <p><em>{{ $t('em') }}.</em></p>
              <p class="font-monospace mb-0">{{ $t('Thisisinmonospace') }}</p>
            </div>
          </div>
        </div>
        <!-- /Text Element -->

        <!-- Coloured Link -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ColouredLink') }}</h5>
            </div>
            <div class="card-body">
              <p><a href="javascript:void(0);" class="text-primary">{{ $t('Primarylink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-secondary">{{ $t('Secondarylink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-success">{{ $t('Successlink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-danger">{{ $t('Dangerlink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-warning">{{ $t('Warninglink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-info">{{ $t('Infolink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-light bg-dark">{{ $t('Lightlink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-dark">{{ $t('Darklink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-muted">{{ $t('Mutedlink') }}</a></p>
              <p><a href="javascript:void(0);" class="text-white bg-dark mb-0">{{ $t('Whitelink') }}</a></p>
            </div>
          </div>
        </div>
        <!-- /Coloured Link -->

        <!-- Coloured Text -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('ColouredText') }}</h5>
            </div>
            <div class="card-body">
              <p class="text-primary">.text-primary</p>
              <p class="text-secondary">.text-secondary</p>
              <p class="text-success">.text-success</p>
              <p class="text-danger">.text-danger</p>
              <p class="text-warning">.text-warning</p>
              <p class="text-info">.text-info</p>
              <p class="text-light bg-dark">.text-light</p>
              <p class="text-dark">.text-dark</p>
              <p class="text-muted">.text-muted</p>
              <p class="text-white bg-dark mb-0">.text-white</p>
            </div>
          </div>
        </div>
        <!-- /Coloured Text -->

        <!-- Bullet Lists -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">{{ $t('BulletLists') }}</h5>
            </div>
            <div class="card-body">
              <ul class="list-disc">
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li class="mb-2">
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Bullet Lists -->

        <!-- Number Lists -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Number Lists</h5>
            </div>
            <div class="card-body">
              <ul class="list-decimal">
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li class="mb-2">
                  Facilisis in pretium nisl aliquet
                  <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Number Lists -->

        <!-- Lead Paragraph -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Lead Paragraph</h5>
            </div>
            <div class="card-body">
              <p class="lead mb-0">
                <b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of
                passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
        <!-- /Lead Paragraph -->

        <!-- Blockquote Left Aligned -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Blockquote Left Aligned</h5>
            </div>
            <div class="card-body">
              <figure class="blockquote-container">
                <blockquote class="blockquote mb-2">
                  <h6>
                    The greatest glory in living lies not in never falling, but in rising
                    every time we fall.
                  </h6>
                </blockquote>
                <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7">
                  <cite title="Source Title">Nelson Mandela</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <!-- /Blockquote Left Aligned -->

        <!-- Blockquote Right Aligned -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Blockquote Right Aligned</h5>
            </div>
            <div class="card-body">
              <figure class="blockquote-container text-end">
                <blockquote class="blockquote mb-2">
                  <h6>
                    The greatest glory in living lies not in never falling, but in rising
                    every time we fall.
                  </h6>
                </blockquote>
                <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7">
                  <cite title="Source Title">Nelson Mandela</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <!-- /Blockquote Right Aligned -->

        <!-- Custom Color Blockquote -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Custom Color Blockquote</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote primary mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote secondary mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote info mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote warning mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote success mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
                <div class="col-xl-4">
                  <blockquote class="blockquote custom-blockquote danger mb-3 text-center">
                    <h6>
                      The future belongs to those who believe in the beauty of their
                      dreams..
                    </h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                      Someone famous as
                      <cite title="Source Title">-Eleanor Roosevelt</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Custom Color Blockquote -->

        <!-- Description List Alignment -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Description List Alignment</div>
            </div>
            <div class="card-body">
              <dl class="row mb-0">
                <dt class="col-sm-3">Description lists</dt>
                <dd class="col-sm-9">
                  A description list is perfect for defining terms.
                </dd>

                <dt class="col-sm-3">Term</dt>
                <dd class="col-sm-9">
                  <p>Definition for the term.</p>
                  <p>And some more placeholder definition text.</p>
                </dd>

                <dt class="col-sm-3">Another term</dt>
                <dd class="col-sm-9">
                  This definition is short, so no extra paragraphs or anything.
                </dd>

                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                <dd class="col-sm-9">
                  This can be useful when space is tight. Adds an ellipsis at the end.
                </dd>

                <dt class="col-sm-3">Nesting</dt>
                <dd class="col-sm-9 mb-0">
                  <dl class="row mb-0">
                    <dt class="col-sm-4">Nested definition list</dt>
                    <dd class="col-sm-8 mb-0">
                      I heard you like definition lists. Let me put a definition list
                      inside your definition list.
                    </dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <!-- /Description List Alignment -->

        <!-- List Unstyled -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">List Unstyled</div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it's still a list.</li>
                <li>However, this style only applies to immediate child elements.</li>
                <li class="mb-2">
                  Nested lists:
                  <ul class="list-circle">
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">List Inline</div>
            </div>
            <div class="card-body">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">This is a list item.</li>
                <li class="list-inline-item">And another one.</li>
                <li class="list-inline-item">But they're displayed inline.</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /List Unstyled -->

        <!-- Abbreviations -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Abbreviations</div>
            </div>
            <div class="card-body">
              <p><abbr title="attribute">attr</abbr></p>
              <p class="mb-0">
                <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Customizing headings</div>
            </div>
            <div class="card-body">
              <h3>
                Fancy display heading
                <small class="text-muted">With faded secondary text</small>
              </h3>
            </div>
          </div>
        </div>
        <!-- /Abbreviations -->

        <!-- Horizontal Rules -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Horizontal Rules</div>
            </div>
            <div class="card-body">
              <p class="mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
                fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum,
                architecto veniam delectus vel dolor magni a vero sunt ut harum.
              </p>
              <div class="text-success">
                <hr />
              </div>
              <p class="mb-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                perspiciatis, magni numquam quos perferendis nulla magnam odit amet
                excepturi quisquam provident.
              </p>

              <hr class="border-danger border-2 opacity-50" />
              <p class="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                aliquid consequatur aut doloremque assumenda voluptatem, id qui vero
                adipisci! Nostrum ipsam praesentium!
              </p>
              <hr class="border-primary border-3 opacity-75" />
            </div>
          </div>
        </div>
        <!-- /Horizontal Rules -->

        <!-- Text Transform -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Text Transform</div>
            </div>
            <div class="card-body">
              <p class="text-lowercase">Lowercased text.</p>
              <p class="text-uppercase">Uppercased text.</p>
              <p class="text-capitalize mb-0">CapiTaliZed text.</p>
            </div>
          </div>
        </div>
        <!-- /Text Transform -->

        <!-- Text Decoration -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Text Decoration</div>
            </div>
            <div class="card-body">
              <p class="text-decoration-underline">This text has a line underneath it.</p>
              <p class="text-decoration-line-through">
                This text has a line going through it.
              </p>
              <a href="javascript:void(0);" class="text-decoration-none">This link has its text decoration removed
              </a>
            </div>
          </div>
        </div>
        <!-- /Text Decoration -->

        <!-- Font Weight and Italics -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Font Weight and Italics</div>
            </div>
            <div class="card-body">
              <p class="fw-bold">Bold text.</p>
              <p class="fw-bolder">
                Bolder weight text (relative to the parent element).
              </p>
              <p class="fw-semibold">Semibold weight text.</p>
              <p class="fw-normal">Normal weight text.</p>
              <p class="fw-light">Light weight text.</p>
              <p class="fw-lighter">
                Lighter weight text (relative to the parent element).
              </p>
              <p class="fst-italic">Italic text.</p>
              <p class="fst-normal mb-0">Text with normal font style</p>
            </div>
          </div>
        </div>
        <!-- /Font Weight and Italics -->

        <!-- Line Height -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Line Height</div>
            </div>
            <div class="card-body">
              <p class="lh-1">
                This is a long paragraph written to show how the line-height of an element
                is affected by our utilities. Classes are applied to the element itself or
                sometimes the parent element. These classes can be customized as needed
                with our utility API.
              </p>
              <p class="lh-sm">
                This is a long paragraph written to show how the line-height of an element
                is affected by our utilities. Classes are applied to the element itself or
                sometimes the parent element. These classes can be customized as needed
                with our utility API.
              </p>
              <p class="lh-base">
                This is a long paragraph written to show how the line-height of an element
                is affected by our utilities. Classes are applied to the element itself or
                sometimes the parent element. These classes can be customized as needed
                with our utility API.
              </p>
              <p class="lh-lg mb-0">
                This is a long paragraph written to show how the line-height of an element
                is affected by our utilities. Classes are applied to the element itself or
                sometimes the parent element. These classes can be customized as needed
                with our utility API.
              </p>
            </div>
          </div>
        </div>
        <!-- /Line Height -->

        <!-- Monospace -->
        <div class="col-xl-3">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Monospace</div>
            </div>
            <div class="card-body">
              <p class="font-monospace mb-0">This is in monospace</p>
            </div>
          </div>
        </div>
        <!-- /Monospace -->

        <!-- Reset Color -->
        <div class="col-xl-3">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Reset Color</div>
            </div>
            <div class="card-body">
              <p class="text-muted mb-0">
                Muted text with a
                <a href="javascript:void(0);" class="text-reset text-decoration-underline text-dark">reset link</a>.
              </p>
            </div>
          </div>
        </div>
        <!-- /Reset Color -->

        <!-- Visible Text -->
        <div class="col-xl-3">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Visible Text</div>
            </div>
            <div class="card-body">
              <p class="visible mb-0">This is visible text</p>
            </div>
          </div>
        </div>
        <!-- /Visible Text -->

        <!-- Invisible Text -->
        <div class="col-xl-3">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Invisible Text</div>
            </div>
            <div class="card-body">
              <p class="invisible mb-0">This is invisible text</p>
            </div>
          </div>
        </div>
        <!-- /Invisible Text -->

        <!-- Text Alignment -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Text Alignment</div>
            </div>
            <div class="card-body">
              <p class="text-start">Start aligned text on all viewport sizes.</p>
              <p class="text-center">Center aligned text on all viewport sizes.</p>
              <p class="text-end">End aligned text on all viewport sizes.</p>

              <p class="text-sm-start">
                Start aligned text on viewports sized SM (small) or wider.
              </p>
              <p class="text-md-start">
                Start aligned text on viewports sized MD (medium) or wider.
              </p>
              <p class="text-lg-start">
                Start aligned text on viewports sized LG (large) or wider.
              </p>
              <p class="text-xl-start">
                Start aligned text on viewports sized XL (extra-large) or wider.
              </p>
            </div>
          </div>
        </div>
        <!-- /Text Alignment -->

        <!-- Text Wrapping and Overflow -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Text Wrapping and Overflow</div>
            </div>
            <div class="card-body">
              <div class="badge bg-primary text-wrap mb-3" style="width: 6rem">
                This text should wrap.
              </div>
              <p class="text-muted mb-2">
                use class <code>.text-nowrap</code> to prevent text from wrapping
              </p>
              <div class="text-nowrap bg-light border text-dark" style="width: 8rem">
                This text should overflow the parent.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Word break</div>
            </div>
            <div class="card-body">
              <p class="text-break mb-0">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
              </p>
            </div>
          </div>
        </div>
        <!-- /Text Wrapping and Overflow -->
      </div>
    </div>
  </div>
</template>
