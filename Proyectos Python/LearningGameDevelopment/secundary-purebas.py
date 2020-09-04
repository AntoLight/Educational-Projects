import sys
import os
import pygame
pygame.init()

clock = pygame.time.Clock()

scrsize = width, height = 600, 400
black = 0, 0, 0
bgcolor = (240, 240, 220)  # light grey

# to get the true full-screen size, do this BEFORE pygame.display.set_mode:
fullscreen_sz = pygame.display.Info().current_w, pygame.display.Info().current_h
print('screen size =', fullscreen_sz)


# ---------- This works under Windows Vista, no promises elsewhere! ----------
# initially center the pygame window by setting %SDL_VIDEO_WINDOW_POS%
win_pos_left = 1 + ((fullscreen_sz[0] - width) // 2)
win_pos_top = 1 + ((fullscreen_sz[1] - height) // 2)
os.environ['SDL_VIDEO_WINDOW_POS'] = '{0},{1}'.format(
    win_pos_left, win_pos_top)
# ----------------------------------------------------------------------------

screen = pygame.display.set_mode(scrsize, pygame.RESIZABLE)

# ----------------------------------------------------------------------------
os.environ['SDL_VIDEO_WINDOW_POS'] = ''
# if you don't clear the environment variable, the window will reposition
# every time pygame.display.set_mode() gets called due to a VIDEORESIZE event.
# ----------------------------------------------------------------------------

arial = pygame.font.SysFont('arial,microsoftsansserif,courier', 14)
txt2display = arial.render("This window is resizeable", True, black)
txt2display_w = txt2display.get_size()[0]

while True:
    changed = False
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit(0)
        elif event.type == pygame.VIDEORESIZE:
            scrsize = event.size  # or event.w, event.h
            screen = pygame.display.set_mode(scrsize, pygame.RESIZABLE)
            changed = True

    screen.fill(bgcolor)
    # at top-center of screen
    screen.blit(txt2display, ((scrsize[0]+1-txt2display_w)//2, 1))
    pygame.display.update()
    if not changed:
        clock.tick(60)  # limit to 60 fps
